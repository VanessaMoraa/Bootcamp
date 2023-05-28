// npm run dev
// TALLER REACT: Los ejercicios incluyen JSX, componentes, props, map y un ejercicio final que combina todos los conceptos anteriores. ¡Comencemos!

// Ejercicio 1: JSX
// Crea un nuevo componente llamado WelcomeMessage que renderice un mensaje de bienvenida en JSX. Luego, utiliza este componente en el componente principal App.
function WelcomeMessage() {
  let name = "Julia";
  return (
    <p>Hola {name}, este es un mensaje de bienvenida al primer taller de React!</p>
  )
}
export default function PrincipalApp() {
// Aquí quise poner todas las soluciones a los 5 puntos, pero no logré hacer que se ejecutaran todas al tiempo, así que para cada punto habria que comentar/descomentar la solución
  return (
    // <><WelcomeMessage></WelcomeMessage></>,
    // <><ProductCard1></ProductCard1></>,
    // <><ProductCard2></ProductCard2></>,
    // <><ProductCard3></ProductCard3></>,
    <><ProductCard4></ProductCard4></>
    ) 
}

// Ejercicio 2: Componentes
// Crea un nuevo componente llamado ProductCard que represente una tarjeta de producto con información como el nombre, la descripción y el precio. Utiliza este componente para mostrar al menos tres productos diferentes en el componente principal App.


function ProductCard1() {
  const productos = [
    {
      nombre: "iPad",
      descripción: "Tableta marca iPhone, octava generación, con 16gb de almacenamiento, poco uso",
      precio: 500000,
    }, {
      nombre: "Portátil ASUS VivoBook",
      descripción: "Portatil con 128Gb de memoria en SSD, 4 gb de RAM, procesador INTEL pentium gold, bastante ligero, con pantalla NanoEdge",
      precio: 800000,
    }, {
      nombre: "Celular Motorola G8PLUS",
      descripción: "Celular Motorola con memoria de 64Gb, color rojo, cámara principal de 48mpx, frontal de 16mpx, usado en perfectas condiciones",
      precio: 400000,
    }];
  return (
    <ul>
      <><p><strong>{productos[0, 0].nombre}</strong></p></>
      <><p>{productos[0, 0].descripción}</p></>
      <><p>{productos[0, 0].precio}</p></>
      <><p><strong>{productos[0, 1].nombre}</strong></p></>
      <><p>{productos[0, 1].descripción}</p></>
      <><p>{productos[0, 1].precio}</p></>
      <><p><strong>{productos[0, 2].nombre}</strong></p></>
      <><p>{productos[0, 2].descripción}</p></>
      <><p>{productos[0, 2].precio}</p></>
    </ul>
  );
}

// Ejercicio 3: Props
// Agrega propiedades (props) al componente ProductCard para pasar la información del producto desde el componente principal App. Incluye propiedades como el nombre, la descripción y el precio para cada producto y asegúrate de mostrar correctamente esta información en el componente ProductCard.
 
function ProductCard2() {
  const productos = [
    {
      nombre: "iPad2",
      descripción: "Tableta marca iPhone, octava generación, con 16gb de almacenamiento, poco uso",
      precio: 500000,
    }, {
      nombre: "Portátil ASUS VivoBook2",
      descripción: "Portatil con 128Gb de memoria en SSD, 4 gb de RAM, procesador INTEL pentium gold, bastante ligero, con pantalla NanoEdge",
      precio: 800000,
    }, {
      nombre: "Celular Motorola G8PLUS2",
      descripción: "Celular Motorola con memoria de 64Gb, color rojo, cámara principal de 48mpx, frontal de 16mpx, usado en perfectas condiciones",
      precio: 400000,
    }];
  return (
    <ul>
      <Props dato={productos[0, 0].nombre}> </Props>
      <Props dato={productos[0, 0].descripción}></Props>
      <Props dato= {productos[0, 0].precio}></Props>
      <Props dato={productos[0, 1].nombre}> </Props>
      <Props dato={productos[0, 1].descripción}></Props>
      <Props dato= {productos[0, 1].precio}></Props>
      <Props dato={productos[0, 2].nombre}> </Props>
      <Props dato={productos[0, 2].descripción}></Props>
      <Props dato= {productos[0, 2].precio}></Props>
    </ul>
  );
}

const Props = (props)=>{
  return(
    <li><p>{props.dato}</p></li>
  )
 }

// // Ejercicio 4: Map
// // Crea una lista de productos en el componente principal App utilizando un array de objetos que contenga la información de cada producto. Luego, utiliza el método map para renderizar múltiples instancias del componente ProductCard con los datos de cada producto.
function ProductCard3() {
  const productos = [
    {
      nombre: "iPad3",
      descripción: "Tableta marca iPhone, octava generación, con 16gb de almacenamiento, poco uso",
      precio: 500000,
    }, {
      nombre: "Portátil ASUS VivoBook3",
      descripción: "Portatil con 128Gb de memoria en SSD, 4 gb de RAM, procesador INTEL pentium gold, bastante ligero, con pantalla NanoEdge",
      precio: 800000,
    }, {
      nombre: "Celular Motorola G8PLUS3",
      descripción: "Celular Motorola con memoria de 64Gb, color rojo, cámara principal de 48mpx, frontal de 16mpx, usado en perfectas condiciones",
      precio: 400000,
    }];
  return (
    <>
      {productos.map(productos => {
        return (
        <Props2 nombre={productos.nombre} descripción={productos.descripción} precio={productos.precio}></Props2>
        )
      })}
    </>
  );
}
const Props2 = (props)=>{
  return(
    <li><p>{props.nombre}</p><p>{props.descripción}</p><p>{props.precio}</p></li>
  )
 }
// // Ejercicio 5: Combinación de conceptos anteriores
// // En este ejercicio final, crea un componente llamado ProductList que reciba una lista de productos como prop (props) y utilice el método map para renderizar dinámicamente múltiples instancias del componente ProductCard con los datos de cada producto. Utiliza este componente en el componente principal App y asegúrate de pasar la lista de productos como prop.
function ProductCard4() {
  const productos = [
    {
      nombre: "iPad4",
      descripción: "Tableta marca iPhone, octava generación, con 16gb de almacenamiento, poco uso",
      precio: 500000,
    }, {
      nombre: "Portátil ASUS VivoBook4",
      descripción: "Portatil con 128Gb de memoria en SSD, 4 gb de RAM, procesador INTEL pentium gold, bastante ligero, con pantalla NanoEdge",
      precio: 800000,
    }, {
      nombre: "Celular Motorola G8PLUS4",
      descripción: "Celular Motorola con memoria de 64Gb, color rojo, cámara principal de 48mpx, frontal de 16mpx, usado en perfectas condiciones",
      precio: 400000,
    }];
  return (
    <>
      {productos.map(productos => {
        return (
        <ProductList nombre={productos.nombre} descripción={productos.descripción} precio={productos.precio}></ProductList>
        )
      })}
    </>
  );
} 
function ProductList(lista){
  return(
    <>
    <p>Nombre: {lista.nombre}</p>
    <p>Descripción: {lista.descripción}</p>
    <p>Valor: {lista.precio}</p>
    </>
  )
 }
