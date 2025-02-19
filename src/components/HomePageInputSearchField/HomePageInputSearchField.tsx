type HomePageInputSearchField = {
  handleInputChange: (event: any) => void;
  searchTerm: string;
}

export const HomePageInputSearchField = ({ handleInputChange, searchTerm }: HomePageInputSearchField) => {
  return (
    <div className="w-full focus:shadow-3xl">
      <input type="text" placeholder="Search..." className="w-full p-2" onChange={handleInputChange} value={searchTerm} />
    </div>
  )
}