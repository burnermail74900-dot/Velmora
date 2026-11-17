"use client";
import {useState} from "react";
import {Instagram, Send, Mail, MessageCircle, X, ExternalLink} from "lucide-react";
import type {Service} from "@/lib/services";
import {formatPrice} from "@/lib/services";

const CONTACTS = {
  instagram: {label:"Instagram",handle:"@burnermail74900",href:"https://www.instagram.com/burnermail74900/",note:"Open the profile and send a direct message."},
  telegram: {label:"Telegram",handle:"@VV74900",href:"https://t.me/VV74900",note:"Open the profile and start a chat."},
  reddit: {label:"Reddit",handle:"u/Afraid-Flatworm4041",href:"https://www.reddit.com/user/Afraid-Flatworm4041/",note:"Open the profile and start a chat manually."},
  email: {label:"Email",handle:"burnermail74900@gmail.com",href:"mailto:burnermail74900@gmail.com",note:"Your email app will open with an enquiry draft."}
};

export function ContactOptions({service, onClose}:{service?:Service;onClose?:()=>void}) {
  const [copied,setCopied]=useState(false);
  const subject=service?`Enquiry: ${service.name}`:"Enquiry for Velmora";
  const body=service?`Hello! I'm interested in your ${service.name} service (${formatPrice(service.price)}). I'd like to discuss the requirements and availability.`:"Hello! I'd like to make an enquiry with Velmora. Please let me know how we can discuss my idea.";
  const emailHref=`mailto:burnermail74900@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const redditHref=`https://www.reddit.com/message/compose/?to=Afraid-Flatworm4041&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(body)}`;
  const items=[
    {key:"instagram",...CONTACTS.instagram,Icon:Instagram,href:CONTACTS.instagram.href},
    {key:"telegram",...CONTACTS.telegram,Icon:Send,href:CONTACTS.telegram.href},
    {key:"reddit",...CONTACTS.reddit,Icon:MessageCircle,href:redditHref},
    {key:"email",...CONTACTS.email,Icon:Mail,href:emailHref}
  ];
  const content=<div className="contact-options-grid">{items.map(item=><a className="contact-option" key={item.key} href={item.href} target={item.key==="email"?undefined:"_blank"} rel={item.key==="email"?undefined:"noopener noreferrer"}><span className="contact-option-icon"><item.Icon size={19}/></span><span className="contact-option-copy"><b>{item.label}</b><small>{item.handle}</small><em>{item.key==="email"||item.key==="reddit"?"Message draft prepared where supported":item.note}</em></span><ExternalLink size={14}/></a>)}</div>;
  if(onClose) return <div className="contact-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title"><button className="modal-close" onClick={onClose} aria-label="Close contact options"><X size={19}/></button><span className="eyebrow">TAKE THE NEXT STEP</span><h2 id="contact-modal-title">{service?`Enquire about ${service.name}`:"Choose how to reach us."}</h2>{service&&<p className="modal-service-price">{formatPrice(service.price)} · {service.length||service.unit}</p>}<p className="modal-description">Choose your preferred platform. Your message is not sent automatically; review it and send it yourself.</p>{content}<div className="message-preview"><span className="eyebrow">YOUR ENQUIRY MESSAGE</span><p>{body}</p><button type="button" className="text-link copy-message" onClick={async()=>{try{await navigator.clipboard.writeText(body);setCopied(true)}catch{setCopied(false)}}}>{copied?"Copied to clipboard ✓":"Copy message text ↗"}</button></div><p className="contact-modal-footnote">Instagram and Telegram open the supplied profiles; paste your copied message there. Email and Reddit support a pre-filled draft.</p></section></div>;
  return content;
}

export function ServiceEnquiryButton({service,label="Enquire About This Service"}:{service:Service;label?:string}) {
  const [open,setOpen]=useState(false);
  return <><button type="button" className="button service-enquiry-button" onClick={()=>setOpen(true)}>{label} ↗</button>{open&&<ContactOptions service={service} onClose={()=>setOpen(false)}/>}</>;
}
