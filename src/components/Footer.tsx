import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import Copyright from "./Copyright";

export default function Footer() {
  return (

    <footer className="body-font bg-white p-2 md:p-8">
      <div className="flex pt-8 flex-col items-center flex-col border-t border-gray-300 ">
        <h6 className="text-gray-800">
          &gt;&gt; Il naturale equilibrio del legno &lt;&lt;
        </h6>
        <p className="text-gray-600">
          Eredi Monticelli s.n.c. - Via XXV Aprile 11, Primaluna (LC)
          - {<Obfuscate email={process.env.EMAIL} />}
        </p>
        <Copyright />
      </div>
    </footer>


  )
}
