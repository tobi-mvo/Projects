'use client';
import About from "./components/About";
//import Contact from "./components/Contact";//
import Contact2 from "./components/Contact2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Work2 from "./components/Work2";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const {isDark, setIsDark} = useTheme();

  return (
    <>
      <Navbar isDark = {isDark} setIsDark = {setIsDark}/>
      <Header isDark = {isDark} setIsDark = {setIsDark}/>
      <About isDark = {isDark} setIsDark = {setIsDark}/>
      <Services isDark = {isDark} setIsDark = {setIsDark}/>
      
      <Work2 isDark = {isDark} setIsDark = {setIsDark}/>
      <Contact2 isDark = {isDark} setIsDark = {setIsDark}/>
      <Footer isDark = {isDark} setIsDark = {setIsDark}/>
    </>
  );
}
