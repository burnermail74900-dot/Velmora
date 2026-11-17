import {Instagram,Send,Mail,MessageCircle,ExternalLink} from "lucide-react";
const channels=[
 {name:"Instagram",handle:"@burnermail74900",href:"https://www.instagram.com/burnermail74900/",Icon:Instagram,detail:"Open the profile and send a DM."},
 {name:"Telegram",handle:"@VV74900",href:"https://t.me/VV74900",Icon:Send,detail:"Start a direct conversation."},
 {name:"Reddit",handle:"u/Afraid-Flatworm4041",href:"https://www.reddit.com/user/Afraid-Flatworm4041/",Icon:MessageCircle,detail:"Visit the profile to get in touch."},
 {name:"Email",handle:"burnermail74900@gmail.com",href:"mailto:burnermail74900@gmail.com",Icon:Mail,detail:"Send a direct email enquiry."}
];
export function ContactCards(){return <div className="contact-cards">{channels.map(({name,handle,href,Icon,detail})=><a className="contact-card" href={href} key={name} target={name==="Email"?undefined:"_blank"} rel={name==="Email"?undefined:"noopener noreferrer"}><span className="contact-card-icon"><Icon size={21}/></span><span><b>{name}</b><small>{handle}</small><em>{detail}</em></span><ExternalLink size={14}/></a>)}</div>}
