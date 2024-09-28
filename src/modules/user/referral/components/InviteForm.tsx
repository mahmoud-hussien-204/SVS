import CopyButton from "@/components/CopyButton";

import IconFacebook from "@/components/icons/IconFacebook";

import IconTwitter from "@/components/icons/IconTwitter";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import useCopy from "@/hooks/useCopy";

const InviteForm = ({data}: IModalComponentProps) => {
  const {copied, copy, elementRef} = useCopy();
  const url = (data as {url: string}).url;
  return (
    <>
      <ModalHeader title='Invite your friend' />
      <ModalBody>
        <div className='w-full pt-1.5rem'>
          <Label>Share Link</Label>
          <div className='flex h-3rem items-center justify-between rounded-0.5rem bg-base-300 pe-0.25rem ps-1rem'>
            <div className='fill-1 text-12' ref={elementRef}>
              {url}
            </div>
            <CopyButton copied={copied} copy={copy} />
          </div>
        </div>
        <div className='divider'>OR</div>
        <div className='flex gap-1rem'>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target='_blank'
            className='btn flex flex-1 items-center gap-0.25rem bg-[#3B5998] text-base-100 hover:text-white'
          >
            <IconFacebook />
            Facebook
          </a>
          <a
            href={`http://www.twitter.com/share?url=${url}`}
            target='_blank'
            className='btn flex flex-1 items-center gap-0.25rem bg-[#1DA1F2] text-base-100 hover:text-white'
          >
            <IconTwitter />
            Twitter
          </a>
        </div>
      </ModalBody>
    </>
  );
};

export default InviteForm;
