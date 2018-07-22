/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* функции передается форма,объект состояния хранящий значения (value) проверяемых полей, ключи данного 
 * объекта должны соответсвовать id проверяемых полей*/
export function validForm (form,objectValue){
    let arrElements = form.elements;
    for (let i =0; i<arrElements.length; i++ )
        {
        let item = arrElements[i];
        let id = item.id;
        if (item.dataset.rule)
            {let arrrules = item.dataset.rule.split(", ");
                for (let i = 0; i<arrrules.length;i++)
                { switch (arrrules[i])
                    {
                        case "length": 
                        {console.log ("работает length", id);
                        break
                        }
                       /* case "a": 
                        {console.log ("работает a");
                        break
                        } */
                        default: {break}
                    }
                  
                }
            
            }
        }
    ;
};

