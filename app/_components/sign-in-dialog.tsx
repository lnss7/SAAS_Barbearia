import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInDialog = () => {
    const handleLogindWithGoogleClick = () => signIn("google")

    return (
        <>
            <DialogHeader>
                <DialogTitle>Faça login na plataforma</DialogTitle>
                <DialogDescription>
                    Conecte-se usando sua conta Google.
                </DialogDescription>
            </DialogHeader>
            <Button
                variant="outline"
                className="gap-1 font-bold"
                onClick={handleLogindWithGoogleClick}
            >
                <Image
                    src="/google.svg"
                    alt="Fazer login com Google"
                    width={18}
                    height={18}
                />
                Entrar com Google
            </Button>
        </>
    );
}

export default SignInDialog;
