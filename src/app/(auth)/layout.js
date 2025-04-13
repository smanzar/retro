import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout bg-black left-shade">
      <div className="auth-content">
        <div className="auth-header">
          {/* <Image
            src="/logo.svg"
            alt="Logo"
            width={140}
            height={50}
          /> */}
        </div>
        <div className="auth-child">
          <div className="auth-box bg-black-05">
            <div className="auth-desc">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
