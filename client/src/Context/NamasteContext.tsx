import { useState, createContext, useContext, PropsWithChildren} from "react";



interface Iprice {
    id: string,
    unit_amount: number,
}

interface Iproducts {
    id: string,
    name: string,
    default_price: Iprice,
    images: string[],
    description: "",
}



interface IcartItems {
    quantity: number,
    product: string,
}


export interface IUserOrders {
    created: string,
    customer: string,
    products: IOrderProduct[],
}

export interface IOrderProduct {
    product: string,
    quantity: number,
    price: number,
}






interface IusersContext {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    registerUser: string;
    setregisterUser: React.Dispatch<React.SetStateAction<string>>;
    registerPassword: string;
    setregisterPassword: React.Dispatch<React.SetStateAction<string>>;
    registerEmail: string;
    setregisterEmail: React.Dispatch<React.SetStateAction<string>>;
    products: Iproducts[];
    setProducts: React.Dispatch<React.SetStateAction<Iproducts[]>>;
    cart: IcartItems[];
    setCart: React.Dispatch<React.SetStateAction<IcartItems[]>>;
    isLoggedin: boolean;
    setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
    userOrders: IUserOrders[];
    setUserOrders:React.Dispatch<React.SetStateAction<IUserOrders[]>>;
}






const defaultValues: IusersContext = {
    inputValue: "",
    setInputValue: () => {},
    email: "",
    setEmail: () => {},
    username: "",
    setUsername: () => {},
    password: "",
    setPassword: () => {},
    registerUser: "",
    setregisterUser: () => {},
    registerPassword: "",
    setregisterPassword: () => {},
    registerEmail: "",
    setregisterEmail: () => {},
    products: [],
    setProducts: () => {},
    cart: [],
    setCart: () => [],
    isLoggedin: false,
    setIsLoggedin: () => {},
    userOrders: [],
    setUserOrders: () => {},
}




const UsersContext = createContext<IusersContext>(defaultValues);
// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => useContext(UsersContext)






const UserProvider = ({ children }: PropsWithChildren) => {


    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerUser, setregisterUser] = useState("");
    const [registerPassword, setregisterPassword] = useState("");
    const [registerEmail, setregisterEmail] = useState("");
    const [products, setProducts] = useState<Iproducts[]>([]);
    const [ cart, setCart] = useState<IcartItems[]>([]);
    const [ isLoggedin, setIsLoggedin] = useState (false);
    const [userOrders, setUserOrders] = useState<IUserOrders[]>([]);






    return (
        <UsersContext.Provider
        value={{
            inputValue,
            setInputValue,
            email,
            setEmail,
            username,
            setUsername,
            password,
            setPassword,
            registerUser,
            setregisterUser,
            registerPassword,
            setregisterPassword,
            registerEmail,
            setregisterEmail,
            products,
            setProducts,
            cart,
            setCart,
            isLoggedin,
            setIsLoggedin,
            userOrders,
            setUserOrders
        }} >
            {children}
        </UsersContext.Provider>
    )
}



export default UserProvider;