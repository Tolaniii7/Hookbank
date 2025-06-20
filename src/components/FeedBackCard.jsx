import { quotes } from "../assets"

const FeedBackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col rounded-[20px] px-10 py-12
      max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <img src={quotes} alt="quote" className="w-[42px] h-[27px] object-contain" />
        <p className="font-poppins text-white my-10 leading-[32px] text-[18px]">
          {content}
        </p>

        <div className="flex flex-row">
          <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>

          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-white leading-[32px] text-[20px]">{name}</h4>
            <p className="font-poppins text-dimWhite  leading-[24px] text-[16px]">{title}</p>
          </div>
        </div>
    </div>
  )
}

export default FeedBackCard
