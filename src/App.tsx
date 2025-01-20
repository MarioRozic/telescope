import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  useEffect(() => {
    fetch("/user")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Hello world!</h1>
      <Button>Click me</Button>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Card content goes here.</CardContent>
      </Card>
    </>
  );
}

export default App;
