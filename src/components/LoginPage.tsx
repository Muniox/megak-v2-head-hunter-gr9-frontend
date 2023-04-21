import React, {FormEvent, useState} from 'react';
import {useForm} from 'react-hook-form';
import Logo from "../assets/logo.png";

interface LoginCredentials {
    email: string,
    password: string,
}
export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {register} = useForm<LoginCredentials>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(email, password)

    }

    const flexCenter = "flex flex-col items-center justify-center";
    const btnTransition = "transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200"

    return (
        <div className={`${flexCenter} w-full h-screen py-0 bg-black-800`}>
            <div className={`${flexCenter} w-3/4 h-screen`}>
                <img className="mx-auto w-28 " src={Logo} alt="logo" />
                <form className="w-3/5 max-w-lg min-w-fit my-4" onSubmit={handleSubmit}>
                    <div className="my-4 mx-0">
                        <input
                             // eslint-disable-next-line react/jsx-props-no-spreading
                            {...register("email")}
                            type="text"
                            name="email"
                            value={email}
                            className="w-full border-none bg-black-600 text-gray-700 text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-gray focus:text-white"
                            placeholder="E-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-4 mx-0">
                        <input
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...register("password")}
                            type="password"
                            name="password"
                            value={password}
                            className="w-full border-none bg-black-600 text-gray-700 text-lg py-2 px-6 focus:outline-none focus:shadow-lg focus:bg-gray focus:text-white"
                            placeholder="Hasło"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="flex justify-end text-white font-thin text-sm tracking-widest mt-6 mb-10 cursor-pointer">Zapomniałeś hasła?</p>
                    <div className="flex items-center justify-between w-full mt-1 mx-auto gap-12">
                        <p className="text-white font-thin text-sm tracking-widest" > Nie masz konta?
                            <span className="text-white underline font-medium cursor-pointer"> Zarejestruj się</span>
                        </p>
                        <button
                            type="button"
                            className={`${btnTransition} text-white font-thin text-md py-2 px-4 tracking-wider bg-red`}
                            onClick={handleSubmit}>
                            Zaloguj się
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}