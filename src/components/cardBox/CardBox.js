import { IconButton } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";

export default function CardBox({children, color, btnText, btnTop, arrowBtn}) {
  return(
    <>
      <div className="box with-shad" style={{background: color}}>
        <div className="box-content">
          {children}
          <div className={`${btnTop ? 'pos-top' : ''} box-btn`}>
            {
              arrowBtn && (
                <IconButton className="btn-white" rounded="full">
                  <ChevronRight />
                </IconButton>   
              )
            }
            {
              btnText && (
                <p className="text-black">{btnText}</p>
              )
            }
          </div> 
        </div>
      </div>
    </>
  )
}