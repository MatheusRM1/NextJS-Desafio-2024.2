import Header from "@/components/header";

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <div>
                <Header />
                {children}
            </div>
        </html>
    );
}