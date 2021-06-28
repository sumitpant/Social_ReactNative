import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../views/MainPage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import CreatePost from '../views/CreatePost';
import PersonalDetails from '../views/PersonalDetails';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const Tab=createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={MainPage} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                    icon={faHome}
                    size={20}
                    color={"#111"}
                    // style={styles.icons}

                />
                ),
              }}
              tabBarOptions= {{
                activeTintColor: '#111'
            }}
            
            />
            <Tab.Screen name="Create"
            component={CreatePost}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                    icon={faPlusCircle}
                    size={25}
                    color={"#111"}
                    // style={styles.icons}

                />
                ),
              }}
            />
            <Tab.Screen name="Details"
            
            component={PersonalDetails}
            options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                    icon={faUser}
                    size={20}
                    color={"#111"}
                    // style={styles.icons}

                />
                ),
              }}
              tabBarOptions= {{
                activeTintColor: '#111'
            }}
           
            />
            
        </Tab.Navigator>
      
    )
}

export default BottomNav
