
const Tools = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 text-center'>

            {/* vscode */}
            <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 32 32"><path fill="#007acc" d="m11.72 18.685l-6.883 5.184L2 22.922L9 16L2 9.077l2.837-.947l6.883 5.184l11.433-11.3L30 4.922v22.155l-6.847 2.909ZM15.287 16l7.865 5.923V10.076Z" /></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>vs code</p>
            </div>

            {/* vscode */}
            <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 128 128"><path d="M64.144 56.789c-4.976 0-8.563 3.245-8.563 8.112s4.034 8.113 9.014 8.113c3.006 0 5.656-1.19 7.297-3.195l-3.448-1.992c-.91.996-2.294 1.577-3.849 1.577c-2.159 0-3.993-1.127-4.674-2.93H72.55a8.151 8.151 0 0 0 .158-1.577c0-4.863-3.583-8.108-8.564-8.108zm-4.259 6.535c.563-1.798 2.105-2.93 4.26-2.93c2.158 0 3.7 1.132 4.259 2.93zm-1.019-11.493L46.377 73.465L33.884 51.83h4.683l7.806 13.521l7.806-13.521zm-42.212-2.253l16.653 28.845H0Zm74.172 15.324c0 2.704 1.767 4.507 4.507 4.507c1.857 0 3.25-.843 3.966-2.218l3.462 1.997c-1.434 2.388-4.12 3.826-7.428 3.826c-4.98 0-8.563-3.245-8.563-8.112c0-4.868 3.587-8.113 8.563-8.113c3.308 0 5.99 1.438 7.428 3.826l-3.462 1.997c-.716-1.375-2.109-2.218-3.966-2.218c-2.736 0-4.507 1.803-4.507 4.508zM128 51.83v20.732h-4.056V51.831Zm-15.324 4.958c-4.976 0-8.563 3.245-8.563 8.112s4.038 8.113 9.014 8.113c3.006 0 5.656-1.19 7.297-3.195l-3.448-1.992c-.91.996-2.294 1.577-3.85 1.577c-2.158 0-3.992-1.127-4.673-2.93h12.629a8.16 8.16 0 0 0 .157-1.577c0-4.863-3.583-8.108-8.563-8.108zm-4.26 6.535c.564-1.798 2.101-2.93 4.26-2.93s3.7 1.132 4.26 2.93zm-22.999-6.085v4.368a5.157 5.157 0 0 0-1.442-.221c-2.618 0-4.507 1.803-4.507 4.507v6.67h-4.056V57.24h4.056v4.147c0-2.29 2.664-4.147 5.95-4.147z" /></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>vercel</p>
            </div>

            {/* figma */}
            <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"/></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>Figma</p>
            </div>

            {/* github */}
            <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
           <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30ZM65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508Zm4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078Zm3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406Zm5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555Zm7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048Zm8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459Zm8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097Z"/></g></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>Github</p>
            </div>

             {/* netlify */}
             <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
             <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943l-.733.733Z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>netlify</p>
            </div>

             {/* git */}
             <div className='border-white border-2 bg-gradient-to-r from-blue-50 from-10% via-30% to-purple-50 to-90% rounded-xl py-2 md:py-6 '>
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 108"><path fill="#2F2707" d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362c0 4.983 2.747 8.443 9.463 8.443c5.693 0 9.56-3.355 9.56-8.65c0-6-3.46-9.155-9.258-9.155Zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39c0 4.067 5.186 5.291 12.31 5.291c5.9 0 13.938-.414 13.938-5.9c0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013Zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276c0 11.292-8.851 17.904-21.667 17.904c-3.259 0-6.209-.406-8.038-.914l-3.359 5.39l9.969.61c17.602 1.122 27.975 1.632 27.975 15.157c0 11.702-10.272 18.311-27.975 18.311c-18.413 0-25.433-4.68-25.433-12.716c0-4.578 2.035-7.015 5.596-10.378c-3.358-1.419-4.476-3.961-4.476-6.71c0-2.24 1.118-4.273 2.952-6.208c1.83-1.93 3.864-3.865 6.306-6.103c-4.984-2.442-8.75-7.732-8.75-15.262c0-11.697 7.733-19.731 23.295-19.731c4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713Zm27.259-18.487c-5.8 0-9.157-3.36-9.157-9.161c0-5.793 3.356-8.95 9.157-8.95c5.9 0 9.258 3.157 9.258 8.95c0 5.801-3.357 9.161-9.258 9.161ZM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935l1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04Zm69.227-3.944c-4.376 2.135-10.785 4.068-16.586 4.068c-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34c2.852 0 5.799-.71 8.24-1.626l2.75 8.954"/><path fill="#DE4C36" d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66l12.253 12.252a8.145 8.145 0 0 1 8.383 1.953a8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545a8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544a8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707"/></svg>
                <p className='font-bold text-center bg-black text-white w-[60%] mx-auto rounded-md py-1 lg:text-sm text-xs uppercase mt-2'>git</p>
            </div>






        </div>
    );
};

export default Tools;