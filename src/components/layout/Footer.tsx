import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import styled from "styled-components";

const footerLinks = {
  services: [
    { name: "Tech Solutions", href: "/tech-solutions" },
    { name: "CryptoTech & Exchange", href: "/cryptotech" },
    { name: "Homes & Properties", href: "/homes-properties" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem; /* py-16 */
  padding-bottom: 4rem;
  
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2.5rem; /* gap-10 */
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const BrandColumn = styled.div`
  @media (min-width: 1024px) {
    grid-column: span 1 / span 1;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem; /* mb-6 */
`;

const LogoImage = styled.img`
  height: 4rem; /* h-16 */
  width: auto;
  object-fit: contain;
`;

const BrandDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1.5rem; /* mb-6 */
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem; /* gap-4 */
`;

const SocialIconLink = styled.a`
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`;

const SectionHeader = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 1.5rem; /* mb-6 */
  color: ${({ theme }) => theme.colors.foreground};
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* space-y-3 */
`;

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
`;

const ContactItem = styled.li`
  display: flex;
  align-items: start;
  gap: 0.75rem; /* gap-3 */
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 3rem; /* mt-12 */
  padding-top: 2rem; /* pt-8 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* gap-4 */
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem; /* text-sm */
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem; /* gap-6 */
`;

const LegalLink = styled(Link)`
  font-size: 0.875rem; /* text-sm */
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          {/* Brand Column */}
          <BrandColumn>
            <LogoLink to="/">
              <LogoImage 
                src={logoFull} 
                alt="Hartitudeh Empire Logo" 
              />
            </LogoLink>
            <BrandDesc>
              A diversified emporium delivering technology, digital innovation, crypto investment solutions, and real estate opportunities.
            </BrandDesc>
            <SocialContainer>
              {socialLinks.map((social) => (
                <SocialIconLink
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </SocialIconLink>
              ))}
            </SocialContainer>
          </BrandColumn>

          {/* Services */}
          <div>
            <SectionHeader>Our Services</SectionHeader>
            <LinkList>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </LinkList>
          </div>

          {/* Company */}
          <div>
            <SectionHeader>Company</SectionHeader>
            <LinkList>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </LinkList>
          </div>

          {/* Contact */}
          <div>
            <SectionHeader>Contact Us</SectionHeader>
            <ContactList>
              <ContactItem>
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-muted-foreground">info@hartitudehempire.com</span>
              </ContactItem>
              <ContactItem>
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-muted-foreground">+2347083777336, +2348112989898</span>
              </ContactItem>
              <ContactItem>
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-muted-foreground">Global Operations</span>
              </ContactItem>
            </ContactList>
          </div>
        </Grid>

        {/* Bottom Bar */}
        <BottomBar>
          <Copyright>
            © {new Date().getFullYear()} HARTITUDEH EMPIRE. All rights reserved.
          </Copyright>
          <LegalLinks>
            {footerLinks.legal.map((link) => (
              <LegalLink
                key={link.name}
                to={link.href}
              >
                {link.name}
              </LegalLink>
            ))}
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
}
