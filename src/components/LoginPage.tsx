import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

interface LoginCredentials {
    email: string,
    password: string,
}
export const LoginPage: React.FC = () => {

    const schema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("To pole jest wymagane."),
        password: yup
            .string()
            .required("To pole jest wymagane."),

    })

    const {register, handleSubmit, formState: {errors}} = useForm<LoginCredentials>({
        resolver: yupResolver(schema),
    });

    const onSubmit = ((formValues : LoginCredentials) => {
        console.log('form data is', formValues)
    });

    // console.log(errors);

    const btnTransition = "transition ease-in-out delay-500 hover:-translate-y-1 hover:scale-105 duration-200"

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen py-0 bg-black-800">
            <div className="flex flex-col items-center justify-center w-3/4 h-screen">
                <img className="mx-auto w-28 " src={Logo} alt="logo" />
                <form className="w-3/5 max-w-lg min-w-fit my-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-4 mx-0" >
                        <input
                             // eslint-disable-next-line react/jsx-props-no-spreading
                            {...register("email")}
                            type="email"
                            className="w-full border-none bg-black-600 text-gray-700 text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-gray focus:text-white"
                            placeholder="E-mail"

                        />
                        <p className="err-message">{errors.email ?.message}</p>
                    </div>
                    <div className="my-4 mx-0">
                        <input
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...register("password")}
                            type="password"
                            className="w-full border-none bg-black-600 text-gray-700 text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-gray focus:text-white"
                            placeholder="Hasło"
                        />
                        <p className="err-message">{errors.password ?.message}</p>
                    </div>
                    <p className="flex justify-end text-white font-thin text-sm tracking-widest mt-6 mb-10 cursor-pointer"><Link to='/remind'>Zapomniałeś hasła?</Link></p>
                    <div className="flex items-center justify-between w-full mt-1 mx-auto gap-12">
                        <p className="text-white font-thin text-sm tracking-widest" > Nie masz konta?
                            <Link to='/register'><span className="text-white underline font-medium cursor-pointer"> Zarejestruj się</span></Link>
                        </p>
                        <button
                            type="submit"
                            className={`${btnTransition} text-white font-thin text-md py-2 px-4 tracking-wider bg-red`}
                            >
                            Zaloguj się
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}