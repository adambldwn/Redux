import React,{useState,useEffect} from "react";
import {SafeAreaView,View,Text, FlatList} from "react-native";

import axios from "axios";
import {RestaurantItem} from "../components";

export const Restaurants = (props) => {
    const [list,setList] = useState([]);

    const fetchData = () =>{
        axios.get(
            'https://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    "state": "IL"
                }
            }
        )
            .then(response => setList(response.data.restaurants))
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const renderList = ({item}) => <RestaurantItem item={item}/>

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold"}}>Restaurants</Text>
                <FlatList
                    keyExtractor={(item,index)=> index.toString()}
                    data={list}
                    renderItem={renderList}
                    ItemSeparatorComponent={()=> <View style={{borderWidth:0.5, borderColor:"#bdbdbd"}}/>}
                />
            </View>
        </SafeAreaView>
    )
}