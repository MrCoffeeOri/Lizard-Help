export const RegexCorrections = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  companyID: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/g,
  telNumber: /^\(\d{2}\)\s\d{4,5}\-\d{4}$/g
}

export function handleCorrection(e: React.ChangeEvent<HTMLInputElement>, matchCallback: (e: React.ChangeEvent<HTMLInputElement>) => Boolean) {
    if (e.target.value.trim() ==  '') {
      (e.target.nextSibling as HTMLParagraphElement).style.display = "none"
      e.target.removeAttribute("style")
      return  
    }
    const match = matchCallback(e)
    match ? e.target.removeAttribute("error") : e.target.setAttribute("error", "true");
    (e.target.nextSibling as HTMLParagraphElement).style.display = match ? "none" : "block"
    e.target.style.border = match ? "1px solid var(--green-main)": "1px solid var(--red-main)"
}