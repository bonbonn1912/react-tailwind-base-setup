import "./index.css";
function App() {
  return (
    
    <div className="w-screen h-screen lg:flex lg:justify-around lg:items-center">
      <Container text={"First Container"}/>
      
      <Container text={"Second Container"}/>
      <Container text={"Third Container"}/>
    </div>
  );
}

const Container = ({ text, style }: ContainerProps) => {
  return (
    <div className={`${style} flex items-center justify-center p-5 h-1/3 lg:h-1/4 border-blue-400 border-2 bg-blue-300 w-full lg:bg-red-200 lg:w-1/4 lg:border-2 lg:border-black lg:rounded-xl`}>
      <h1 className="text-center text-5xl">{text}</h1>
    </div>
  );
};

interface ContainerProps {
  text: string;
  style?: string;
}

export default App;
