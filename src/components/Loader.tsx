import { MutatingDots } from 'react-loader-spinner'

type Props = {}

export default function Loader({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  )
}
