"use client";
import { useTranslation } from "@/translations/clients";
import React from "react";
import { TextInput } from "../shared/form/text-input.component";
import { useForm } from "react-hook-form";
import { Button } from "../shared/button.component";
import Link from "next/link";

const ForgetPasswordForm = () => {
  const { t } = useTranslation();
  const { register, formState, handleSubmit } = useForm();
  const onSubmit = () => {};
  
  return (
    <div className="flex-col items-center rounded-lg border border-grayLight flex max-w-[568px] sm:w-[500px]">
      <div className="p-6 items-center justify-center text-center flex flex-col gap-3 w-full">
        <h3 className="text-[20px] !font-black text-textMain">{t("forgetPassword")}</h3>
        <p className=" text-sm font-normal text-describeColor ">
          {t("use_email_or_phone")}
        </p>
        <div className="w-full">
          <TextInput
            inputProps={{
              placeholder: t("id_or_email"),
              ...register("email", {
                required: {
                  value: true,
                  message: t("errorLoginUserName"),
                },
              }),
            }}
            errorMessage={
              formState?.errors.email?.message
                ? String(formState?.errors.email?.message)
                : undefined
            }
            className="!font-normal !text-black"
          />
        </div>
        <div className="mb-2  flex flex-col gap-y-3 w-full">
          <div className="flex w-full">
            <Button
              className="w-full justify-center rounded-full bg-blueCustom1 !px-3 !py-2 !font-bold hover:bg-greenCustom3"
              type="submit"
              text={t("forgetPassword")}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
          <div className="flex  items-center justify-between w-full">
            <Link
              className="text-center text-describeColor underline my-2 text-xs"
              href={"/login"}
            >
              {t("login")}
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
