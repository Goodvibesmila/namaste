import { useState, createContext, useContext, PropsWithChildren, useEffect} from "react";

interface Iprice {
    id: string,
    unit_amount: number,
}

interface Iproducts {
    id: number,
    name: string,
    default_price: Iprice,
    images: string[],
    description: "",
}

interface IcartItems {
    quantity: number,
    product: string,
}

// lägger till saker i kundkorg, tänk på:
// cartitem productsquantity + price.id 
//default type - krävs vid betalningen.


interface IusersContext {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
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
    cart: IcartItems[],
    setCart: React.Dispatch<React.SetStateAction<IcartItems[]>>;
}


const defaultValues: IusersContext = {
    inputValue: "",
    setInputValue: () => {},
    email: "",
    setEmail: () => {},
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
}

const UsersContext = createContext<IusersContext>(defaultValues);
export const useUsersContext = () => useContext(UsersContext)


const UserProvider = ({ children }: PropsWithChildren) => {


    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerUser, setregisterUser] = useState("");
    const [registerPassword, setregisterPassword] = useState("");
    const [registerEmail, setregisterEmail] = useState("");
    const [products, setProducts] = useState<Iproducts[]>([]);
    const [ cart, setCart] = useState<IcartItems[]>([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(products)

    }, [products]) 

    

    return (
        <UsersContext.Provider
        value={{
            inputValue,
            setInputValue,
            email,
            setEmail,
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
        }} >
            {children}
        </UsersContext.Provider>
    )
}



export default UserProvider;