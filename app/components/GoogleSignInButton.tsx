"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image";
import GoogleIcon from "@/public/google.svg";

const GoogleSignInButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Image
        src={GoogleIcon}
        alt="Google icon"
        className="w-6 h-6"
      />
    </Button>
  )
}

export default GoogleSignInButton