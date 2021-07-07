import * as React from "react";

function SvgBackgoundSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="none"
      viewBox="0 0 1920 1080"
      {...props}
    >
      <g mask='url("#SvgjsMask1715")' fill="none">
        <path
          fill="url(#BackgoundSVG_svg__SvgjsLinearGradient1716)"
          d="M0 0h1920v1080H0z"
        />
        <path
          d="M1167.701 1282.874c72.914-3.165 143.45-28.726 183.521-89.725 44.477-67.706 60.37-153.353 23.563-225.516-40.065-78.551-118.905-134.454-207.084-134.295-87.939.159-162.486 58.504-205.795 135.039-42.6 75.281-54.925 169.617-7.562 241.997 44.081 67.365 132.927 75.991 213.357 72.5"
          fill="rgba(210, 13, 220, 0.33)"
          style={{
            animation: "float2 4s infinite",
          }}
        />
        <path
          d="M1939.099 1150.063c113.653.763 240.475-7.815 300.545-104.3 62.468-100.337 30.875-228.42-30.518-329.419-58.725-96.61-156.969-164.925-270.027-165.009-113.195-.084-212.572 67.49-270.719 164.609-59.945 100.122-84.668 226.811-22.918 325.831 59.166 94.877 181.827 107.538 293.637 108.288"
          fill="rgba(210, 13, 220, 0.33)"
          style={{
            animation: "float1 5s infinite",
          }}
        />
        <path
          d="M1453.375 735.079c100.129 3.279 183.423-67.935 234.118-154.345 51.41-87.629 74.016-195.758 22.732-283.461-50.893-87.035-156.091-120.498-256.85-116.917-94.157 3.346-182.194 51.268-227.064 134.114-42.945 79.292-24.762 172.405 18.075 251.756 45.599 84.467 113.051 165.712 208.989 168.853M102.58 942.202c65.171 1.079 109.809-58.184 141.534-115.122 30.643-54.997 50.165-119.721 20.149-175.062-31.184-57.496-96.4-89.935-161.683-85.891C43.122 569.81-.235 617.281-27.77 670.108c-25.174 48.298-26.822 103.297-3.291 152.416C-3.37 880.326 38.497 941.141 102.58 942.202"
          fill="rgba(210, 13, 220, 0.33)"
          className="BackgoundSVG_svg__triangle-float3"
        />
        <path
          d="M1353.019 206.491c33.105-1.738 58.937-24.067 76.899-51.93 20.106-31.189 38.151-68.09 22.016-101.506-17.793-36.85-58.033-59.533-98.915-57.751-38.368 1.672-66.55 32.103-85.028 65.769-17.641 32.142-25.764 70.72-7.257 102.371 18.364 31.406 55.954 44.954 92.285 43.047"
          fill="rgba(210, 13, 220, 0.33)"
          className="BackgoundSVG_svg__triangle-float3"
        />
      </g>
      <defs>
        <linearGradient
          x1="89.06%"
          y1="-19.44%"
          x2="10.94%"
          y2="119.44%"
          gradientUnits="userSpaceOnUse"
          id="BackgoundSVG_svg__SvgjsLinearGradient1716"
        >
          <stop stopColor="rgba(43, 73, 105, 1)" offset={0.02} />
          <stop stopColor="rgba(2, 62, 140, 1)" offset={0.68} />
        </linearGradient>
        <style>
          {
            "@keyframes float1{0%,to{transform:translate(0,0)}50%{transform:translate(-10px,0)}}@keyframes float2{0%,to{transform:translate(0,0)}50%{transform:translate(-5px,-5px)}}@keyframes float3{0%,to{transform:translate(0,0)}50%{transform:translate(0,-10px)}}.BackgoundSVG_svg__triangle-float3{animation:float3 6s infinite}"
          }
        </style>
        <mask id="BackgoundSVG_svg__SvgjsMask1715">
          <path fill="#fff" d="M0 0h1920v1080H0z" />
        </mask>
      </defs>
    </svg>
  );
}

export default SvgBackgoundSvg;
