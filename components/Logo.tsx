import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex justify-center -mt-32 mb-8">
      <Image
        src="https://media.licdn.com/dms/image/v2/C560BAQENKPAX_HkK-A/company-logo_200_200/company-logo_200_200/0/1630652411649/superbiller_com_logo?e=1741219200&v=beta&t=P5BjKK3gMAJW58cLGAggn1krdUbhy6XSziHAZtaD2Lw"
        alt="Superbiller Logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}