/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";

const ContactLi = ({index,name,tel,email,group})=>(<li>
                                                         <span>{index +1}</span> 
                                                         <span>{name}</span> 
                                                         <span>{tel}</span>
                                                         <span>{email}</span>
                                                         <span>{group}</span>
                                                    </li>);

export default ContactLi;