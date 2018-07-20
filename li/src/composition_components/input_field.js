/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*в качестве параметров принимает: (object, changeValue) - для input, state - для SelectGroup*/
import React from "react";
import SelectGroup from "./select_group";
export default class InputField extends React.Component {
        constructor ({object,changeValue, state}){
            super ({object,changeValue, state});
        }
    render (){return (
                <div>
                <label for = "name">Имя</label>
                <input 
                id ="name" 
                type="text" 
                placeholder = "имя" 
                autocomplete="off" 
                value = {this.props.object.name} 
                onChange = {this.props.changeValue}/>
                <label for = "tel">Номер тел:</label>
                <input 
                id ="tel" 
                type="tel" 
                placeholder = "тел." 
                autocomplete="off"
                value = {this.props.object.tel} 
                onChange = {this.props.changeValue}
                />
                <label for = "e-mail">E-mail</label>
                <input 
                id ="e-mail" 
                type="email" 
                placeholder = "e-mail" 
                autocomplete="on"
                value = {this.props.object.email} 
                onChange = {this.props.changeValue}
                />
                <SelectGroup onChange = {this.props.changeValue} state = {this.props.state}/>
                </div>
                     )
             };
};
