import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
];

// para onde enviar o usuário autenticado ao tentar acessar uma rota pública
const DEFAULT_AUTHENTICATED_REDIRECT = "/";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthenticated = request.cookies.get("authToken")?.value;
  const publicRoute = publicRoutes.find((route) => route.path === path);

  //  Usuário NÃO autenticado acessando rota pública → segue normal
  if (!isAuthenticated && publicRoute) {
    return NextResponse.next();
  }

  // Usuário NÃO autenticado acessando rota protegida → redireciona para login
  if (!isAuthenticated && !publicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  // Usuário autenticado tentando acessar rota pública → manda para a home (ou dashboard)
  if (isAuthenticated && publicRoute?.whenAuthenticated === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = DEFAULT_AUTHENTICATED_REDIRECT;
    return NextResponse.redirect(url);
  }

  // Usuário autenticado acessando rota protegida → segue normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Aplica em todas as rotas, exceto assets e favicon
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
