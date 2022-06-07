/*Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos, divididos en 3 
comisiones. Estos arreglos contienen las notas finales de los alumnos en cada comisión :  
comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]  
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]  
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9] 
1. Crear una función que devuelva el mayor promedio y a qué comisión corresponde. 
2. Crear una función que devuelva el menor promedio y a qué comisión corresponde. 
3. Teniendo en cuenta que la materia se aprueba con 6, crear una función que devuelva 
la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión 
4. Crear una función que devuelva la menor nota de una comisión, mostrar el resultado 
para cada comisión. */

let comA : number[]= [8,5,7,10,9,2,4,8,6,8];
let comB : number[]= [3,6,8,5,4,7,7,4,6,8];
let comC : number[]= [7,6,9,8,9,8,5,7,10,9];
let indice: number = 0;
    
   let calcularPromedio = (com: number[]) =>{
     let suma: number= 0;
     let promedio : number = 0;
    for (indice= 0; indice < 10; indice++){
      suma += com[indice];
      promedio = suma/10;
      
    } return promedio;
}
  console.log(calcularPromedio(comA));
  console.log(calcularPromedio(comB));
  console.log(calcularPromedio(comC));

   