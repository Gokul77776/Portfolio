import { ChevronsLeftRightEllipsis , CircleUserRound , Home, User } from "lucide-react";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Footer } from "./components/ui/footer";

type LayoutProps ={
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> =  ({children })=>{
      const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon:CircleUserRound   },
    { name: 'Skills', url: '/skills', icon: ChevronsLeftRightEllipsis  },
    { name: 'Contact Me', url: '/contact', icon: User },
     

  ]
    return(
        <>
        <NavBar items={navItems}/>
        <main>{children}</main>
        <Footer/>
        
        </>
    );
};