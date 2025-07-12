import { Briefcase, FileText, Home, User } from "lucide-react";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Footer } from "./components/ui/footer";

type LayoutProps ={
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> =  ({children })=>{
      const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Skills', url: '/skills', icon: Briefcase },
    { name: 'Contact Me', url: '/contact', icon: FileText },
     

  ]
    return(
        <>
        <NavBar items={navItems}/>
        <main>{children}</main>
        <Footer/>
        
        </>
    );
};