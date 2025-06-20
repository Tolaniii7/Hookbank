import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";


const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1  flex flex-col justify-start mr-10">
            <img src={logo} alt="hookbank" className="w-[266px] h-[72px]"/>
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              A new way to make the payment easy, reliable and secure
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-wrap justify-between md:mt-0 mt-10">
            {footerLinks.map((footer)=>(
              <div key={footer.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px] leading-[27px]  text-white cursor-pointer">
                  {footer.title}
                </h4>
                <ul className="list-none mt-4">
                  {footer.links.map((link, index)=> (
                    <li key={link.name} className= {`font-poppins text-[16px] leading-[24px] hover:text-secondary
                      text-dimWhite cursor-pointer ${index !== footer.links.length ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
              ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center
           md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins text-center text-[18px] leading-[27px]  text-white cursor-pointer">
            2025 HooBank. All Rights Reserved
          </p>

          <div className="flex md:mt-0 mt-6">
              {socialMedia.map((social, index)=>(
                <img src={social.icon} key={social.id} alt="social__icon"
                 className= { `w-[21px] h-[21px] object-contain cursor-pointer
                   ${index !== socialMedia.length ? 'mr-6' : 'mr-0'}`}  />
                ))}
          </div>

        </div>
    </section>
  )


export default Footer
