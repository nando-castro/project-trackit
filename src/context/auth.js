/* import React, {useState, createContext} from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(email, password){
        if(email !== '' && password !== ''){
            setUser({
                email: email,
                status: 'ativo',
            })

            navigation.navigate("Home");
        }
    }

    return(
        <AuthContext.Provider value={{ name:"Fernando", signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider; */