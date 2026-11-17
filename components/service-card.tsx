import {ArrowUpRight} from "lucide-react";
import type {Service} from "@/lib/services";
import {formatPrice} from "@/lib/services";
import {ServiceEnquiryButton} from "@/components/contact-options";
export function ServiceCard({service}:{service:Service}){return <article className="service-card"><div className="service-card-top"><span className="eyebrow">{service.type==="chat"?"EROTIC ROLEPLAY":service.type==="character"?"ADULT CHARACTER DESIGN":"CUSTOM EROTICA"}</span><span className="service-price">{formatPrice(service.price)}</span></div><h3>{service.name}</h3><p>{service.description}</p><div className="service-meta">{service.length&&<span>{service.length}</span>}<span>{service.unit}</span></div><div className="service-card-actions"><a className="text-link" href={`/services/${service.slug}`}>Explore service <ArrowUpRight size={15}/></a><ServiceEnquiryButton service={service}/></div></article>}
