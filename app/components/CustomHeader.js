const CustomHeader = ({header, subheader}) => {
  return (
    <div className="section-header">
      <p className="header text-center text-xs sm:text-sm sm:pb-2 uppercase tracking-wider text-gray-500 dark:text-gray-400">{header}</p>
      <p className="sub-header text-lg font-semibold sm:text-4xl text-center">{subheader}</p>
      <div className="divider divider-info opacity-50 w-1/5 my-2 mx-auto"/>
    </div>
  )
}

export default CustomHeader