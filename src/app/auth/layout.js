// app/auth/layout.js
export default function AuthLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* You can add specific meta tags or stylesheets for the auth layout here */}
            </head>
            <body>
                {/* The body here will be specific to the auth layout, skipping any global body structure */}
                <main>{children}</main>
            </body>
        </html>
    );
}
