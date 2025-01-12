"use client"
import { useTranslation } from "@/translations/clients";


const FooterLogin = () => {
    const {t}=useTranslation()
    
    return (
        <div className=" flex items-center justify-center  p-4">
            <p className="text-sm font-normal text-blueCustom2"> {t("allRight")}</p>
        </div>
    );
}

export default FooterLogin;
