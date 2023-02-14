import React from "react";
import {  StyleSheet,Text, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Output from "./Out";
//import {AsyncStorage} from 'react-native';

export default function Input(){
    const [task, setTask] = React.useState("");
    const [err, setErr] = React.useState("")

    const [tsks,setTsks] = React.useState([])
    let [index,setIndex] = React.useState(0)

    const SaveTasks = () =>{
        localStorage.setItem("tasks", JSON.stringify(tsks))
    }

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

    const handleSubmit = () => {
     if(task.length == 0){
        setErr("Task is required")
     }else if(task.length < 3){
        setErr("Min length is 3")
     }else{
        setErr("")
        GetTasks
        setIndex(++index)
        setTsks(tsks=>[...tsks, {id:index, name:task, done:false }])
    }
     
    }

    return(
    <>
    <View style={styles.Incontainer}>
    <Text style={styles.wel}>Welcome TO DOs</Text>
    <TextInput
      label="Enter Your Task"
      value={task}
      onChangeText={task => setTask(task)}/>
     
     <Text style={styles.err}>{err}</Text>
      <View style={{flexDirection:"row"}}>
      <Button mode="elevated" onPress={() => handleSubmit()} style={styles.btn}>Check</Button>
      <Button mode="elevated" icon="plus" onPress={SaveTasks} style={styles.btn}>Add</Button>
      </View>
    </View>
     <Output name={task}/>
    </>
    )
}

const styles = StyleSheet.create({
    Incontainer: {
      padding:40
    },
    btn:{
        marginTop:12,
        fontWeight:'bold',
        marginLeft:10
    },
    err:{
        color:'#fff'
    },
    wel:{
        fontSize:25,
        fontWeight:'bold',
        color:'#EFDCF9',
        marginBottom:35
    },
  });