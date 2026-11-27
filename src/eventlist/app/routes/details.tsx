import type { LoaderFunctionArgs } from "react-router";


export default function Details({ params }: LoaderFunctionArgs) {

  const { slug } = params;

  return (
    <div>show {slug}</div>
  )
}
