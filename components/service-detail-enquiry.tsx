"use client";
import {ServiceEnquiryButton} from "@/components/contact-options";
import type {Service} from "@/lib/services";
export function ServiceDetailEnquiry({service}:{service:Service}){return <ServiceEnquiryButton service={service} label="Enquire About This Service"/>}
