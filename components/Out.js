import React, { useState } from "react";
//import {AsyncStorage} from 'react-native';
import { Button } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { DataTable } from 'react-native-paper';
import Hr from './HR';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Output(props){
    const [tsks, setTsks] = React.useState([])

    const GetTasks = async ()=>{
        try{
           let Tasks = await localStorage.getItem("tasks")
          if(Tasks!==null){
           setTsks(JSON.parse(Tasks))
          }
        }catch(error){
           console.log(error)
        }
   }

   let [done,setDone] = useState(true)

   let complete=(tsk)=>{
    setDone(!done)
    tsk.done = done
    localStorage.setItem("tasks", JSON.stringify(tsks))
    console.log(tsk)
    }

   let del=(tsk)=>{
    const newTsks = tsks.filter((t) =>{ 
        return t !== tsk
    })

    setTsks(newTsks)
    localStorage.setItem("tasks", JSON.stringify(tsks))
    }

    let [Name,setName] = useState("")
    let edit = (tsk) =>{
        setName(props.name) 
        tsk.name = Name
       localStorage.setItem("tasks", JSON.stringify(tsks))
    }
   return(
   <>
    <Hr/>
    <Button mode="elevated" onPress={GetTasks}>Show tasks</Button>
    {GetTasks}
    <DataTable style={styles.tbl}>  
    <DataTable.Header>
        <DataTable.Title style={{marginLeft:20}}>Task</DataTable.Title>
        <DataTable.Title>Done</DataTable.Title>
        <DataTable.Title style={{marginLeft:20}}>Edit</DataTable.Title>
        <DataTable.Title>Remove</DataTable.Title>
      </DataTable.Header>
    </DataTable>
    {
    tsks.map(tsk =>{
        
            return(
              <View key={tsk.id} style={{flexDirection:'row',backgroundColor:"#EFDCF9",paddingHorizontal:500}}>
                <Text style={tsk.done?styles.complete:styles.txt}>{tsk.name}</Text>
               
                <Button mode="elevated" style={{marginRight:16, marginVertical:5}} onPress={()=>complete(tsk)}>
                <Icon name='check' size={22} color="#695E93"/>
                </Button>
                <Button mode="elevated" onPress={()=>edit(tsk)} style={{marginRight:16, marginVertical:5}}>Edit</Button>

                <Button mode="elevated" onPress={()=>del(tsk)} style={{marginRight:16, marginVertical:5}}> 
                    <Icon name='trash' size={22} color="#695E93"/>
                </Button>

              </View>
            )})
    }
    
    </>)
}

const styles = StyleSheet.create({
    tbl: {
      backgroundColor:'#EFDCF9',
      paddingVertical:5,
      marginTop:20,
    },
    txt:{
        color:"#695E93",
        fontWeight:"bold",
        fontSize:16,
        marginTop:8,
        marginRight:30,
        marginLeft:20
},
    complete:{
       textDecorationLine: 'line-through',
       marginLeft:20,
       color:"#695E93",
       fontSize:16,
       marginTop:8,
       marginRight:30,
    }
})