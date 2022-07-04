import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {InicialApp} from '../Inicial';
import {SegundaApp} from '../SegundaScreen';
import {TerceiraApp} from '../TerceiraScreen';
import {QuartaApp} from '../QuartaScreen';

export type NavegacaoStackParams = {
    Inicial: undefined,
    SegundaScreen: undefined,
    TerceiraScreen: undefined,
    QuartaScreen: undefined
}

const Stack = createNativeStackNavigator<NavegacaoStackParams>();

export const NavegacaoStack = () => (
    <Stack.Navigator>
        <Stack.Screen name = "Inicial" component={InicialApp} options={{headerShown: false}}/>
        <Stack.Screen name = "SegundaScreen" component={SegundaApp} options={{title: "Home"}}/>
        <Stack.Screen name = "TerceiraScreen" component={TerceiraApp} options= {{title: "Busca"}}/>
        <Stack.Screen name = "QuartaScreen" component={QuartaApp} options= {{title: "Perfil"}}/>
    </Stack.Navigator>
)