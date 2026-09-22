import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";
import styled from "styled-components";
import { supabase } from "@/integrations/supabase/client";

const services = [
  {
    name: "Hartitudeh Tech Solutions",
    href: "/tech-solutions",
    description: "Software, Design & Digital Innovation",
  },
  {
    name: "Hartitudeh CryptoTech & Global Exchange",
    href: "/cryptotech",
    description: "Crypto Trading & Web3 Solutions",
  },
  {
    name: "Hartitudeh Homes & Properties",
    href: "/homes-properties",
    description: "Real Estate & Property Investment",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: hsl(var(--background) / 0.8);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem; /* h-20 */
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 2.5rem; /* h-10 */
  width: auto;
  object-fit: contain;
  @media (min-width: 768px) {
    height: 3rem; /* h-12 */
  }
`;

const DesktopNav = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem; /* gap-8 */
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
`;

const NavDropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  color: hsl(var(--foreground));
  font-weight: 700;
  font-size: 1.05rem;
  transition: color 0.2s ease-in-out;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #19013b;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 1rem;
`;

const DropdownContent = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1rem;
  width: 20rem; /* w-80 */
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const DropdownItemLink = styled(Link)`
  display: block;
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.muted};
  }
`;

const DropdownItemTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.foreground};
  transition: color 0.2s;
  
  ${DropdownItemLink}:hover & {
    color: #19013b;
  }
`;

const DropdownItemDesc = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 0.25rem;
`;

const HeaderNavLink = styled(Link)<{ $isActive: boolean }>`
  font-weight: 700;
  font-size: 1.05rem;
  transition: color 0.2s;
  color: ${({ $isActive }) => 
    $isActive ? '#19013b' : 'hsl(var(--foreground))'};
  
  &:hover {
    color: #19013b;
  }
`;

const DesktopControls = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.colors.foreground};
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: block;
  background-color: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 700;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const MobileDropdownContent = styled(motion.div)`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MobileDropdownLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;
  
  &:hover {
    color: #19013b;
  }
`;

const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 0.5rem 0;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ $isActive }) => 
    $isActive ? '#19013b' : 'hsl(var(--foreground))'};
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <NavContainer>
      <Container>
        <FlexRow>
          {/* Logo */}
          <LogoLink to="/">
            <LogoImage 
              src={logoFull} 
              alt="Hartitudeh Empire Logo" 
            />
          </LogoLink>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navLinks.map((link) => (
              <NavLinkWrapper key={link.name}>
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <NavDropdownTrigger>
                      {link.name}
                      <ChevronDown 
                        className="w-4 h-4 transition-transform" 
                        style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none' }}
                      />
                    </NavDropdownTrigger>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <DropdownMenu
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <DropdownContent>
                            {services.map((service) => (
                              <DropdownItemLink
                                key={service.href}
                                to={service.href}
                              >
                                <DropdownItemTitle>
                                  {service.name}
                                </DropdownItemTitle>
                                <DropdownItemDesc>
                                  {service.description}
                                </DropdownItemDesc>
                              </DropdownItemLink>
                            ))}
                          </DropdownContent>
                        </DropdownMenu>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <HeaderNavLink
                    to={link.href}
                    $isActive={isActive(link.href)}
                  >
                    {link.name}
                  </HeaderNavLink>
                )}
              </NavLinkWrapper>
            ))}
          </DesktopNav>

          {/* Desktop CTA */}
          <DesktopControls>
            {user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-[#19013b] text-[#19013b] hover:bg-[#19013b] hover:text-white font-bold" asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-red-500 font-bold">
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button className="bg-[#19013b] hover:bg-[#2c0366] text-white font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            )}
          </DesktopControls>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-[#19013b]" /> : <Menu className="w-6 h-6 text-[#19013b]" />}
          </MobileMenuButton>
        </FlexRow>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <MobileMenuContainer>
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <MobileDropdownButton
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        {link.name}
                        <ChevronDown 
                          className="w-4 h-4 transition-transform" 
                          style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none' }}
                        />
                      </MobileDropdownButton>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <MobileDropdownContent
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {services.map((service) => (
                              <MobileDropdownLink
                                key={service.href}
                                to={service.href}
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </MobileDropdownLink>
                            ))}
                          </MobileDropdownContent>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <MobileNavLink
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      $isActive={isActive(link.href)}
                    >
                      {link.name}
                    </MobileNavLink>
                  )}
                </div>
              ))}
              {user ? (
                <div className="flex flex-col gap-2 w-full mt-4">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-[#19013b] text-[#19013b] font-bold" asChild>
                    <Link to="/profile" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full text-muted-foreground hover:text-red-500 font-bold flex items-center justify-center gap-2" onClick={() => { handleLogout(); setIsOpen(false); }}>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button className="bg-[#19013b] hover:bg-[#2c0366] text-white font-bold w-full mt-4 shadow-md py-3" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              )}
            </MobileMenuContainer>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
}
