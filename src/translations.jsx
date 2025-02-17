import { Link } from "@chakra-ui/react";

export const translations = {
  en: {
    welcome: (
      <>
        Hi! I’m Will, a software developer who loves understanding how things
        work and applying that to solve problems and build cool stuff. I’m
        currently a Senior Full Stack Developer with the{" "}
        <Link
          href="https://www2.gov.bc.ca/"
          textDecoration="underline"
          isExternal
        >
          Government of British Columbia
        </Link>
        , where I am working on a large scale legacy modernization project.
        Previously, I worked as a developer at{" "}
        <Link
          href="https://immigrate.biz/"
          textDecoration="underline"
          isExternal
        >
          Immigrate Software
        </Link>
        . I hold a Bachelor of Computing Science from{" "}
        <Link href="https://www.tru.ca/" textDecoration="underline" isExternal>
          Thompson Rivers University
        </Link>
        , located in Kamloops, BC. My interests are in software architecture,
        security, and working in collaborative team environments.
      </>
    ),
    about: (
      <>
        Originally from Smithers, BC, I’ve moved around a few times and am
        currently living and working remotely from Vancouver Island. My focus is
        on building secure web applications using React, TypeScript, Node.js,
        PHP (Laravel), and PostgreSQL. I’m also passionate about CI/CD and
        DevOps, streamlining workflows to deliver better software faster. I
        maintain projects like{" "}
        <Link
          href="https://www.npmjs.com/package/lorem-ipsum-norwegian"
          textDecoration="underline"
          isExternal
        >
          lorem-ipsum-norwegian
        </Link>{" "}
        and{" "}
        <Link
          href="https://github.com/kiiskila/norsk-bokleser"
          textDecoration="underline"
          isExternal
        >
          norsk-bokleser
        </Link>
        . When I’m not coding, you’ll find me playing piano, learning new
        programming and natural languages, or digging into cyber security
        papers.
      </>
    ),
    aboutMe: <>About me</>,
    email: <>Email</>,
  },
  no: {
    welcome: (
      <>
        Hei! Jeg er Will, en programvareutvikler som elsker å forstå hvordan
        ting fungerer og bruke det til å løse problemer og bygge kule ting. Jeg
        jobber for tiden som Senior Full Stack Developer hos{" "}
        <Link
          href="https://www2.gov.bc.ca/"
          textDecoration="underline"
          isExternal
        >
          Government of British Columbia
        </Link>
        , hvor jeg jobber med et stort moderniseringsprosjekt for eldre
        systemer. Tidligere jobbet jeg som utvikler hos{" "}
        <Link
          href="https://immigrate.biz/"
          textDecoration="underline"
          isExternal
        >
          Immigrate Software
        </Link>
        . Jeg har en bachelorgrad i informatikk fra{" "}
        <Link href="https://www.tru.ca/" textDecoration="underline" isExternal>
          Thompson Rivers University
        </Link>
        , som ligger i Britisk Columbia, Kanada. Mine interesser ligger innen
        programvarearkitektur, sikkerhet og å jobbe i samarbeidende teammiljøer.
      </>
    ),
    about: (
      <>
        Opprinnelig fra Smithers, BC, har jeg flyttet rundt noen ganger og bor
        og jobber nå remote fra Vancouver Island. Jeg fokuserer på å bygge sikre
        webapplikasjoner ved hjelp av React, TypeScript, Node.js, PHP (Laravel)
        og PostgreSQL. Jeg er også lidenskapelig opptatt av CI/CD og DevOps, og
        jobber med å strømlinjeforme arbeidsflyter for å levere bedre
        programvare raskere. Jeg vedlikeholder prosjekter som{" "}
        <Link
          href="https://www.npmjs.com/package/lorem-ipsum-norwegian"
          textDecoration="underline"
          isExternal
        >
          lorem-ipsum-norwegian
        </Link>{" "}
        og{" "}
        <Link
          href="https://github.com/kiiskila/norsk-bokleser"
          textDecoration="underline"
          isExternal
        >
          norsk-bokleser
        </Link>
        . Når jeg ikke koder, finner du meg kanskje ved pianoet, lærer nye
        programmerings- eller naturlige språk, eller dykker ned i
        cybersikkerhetsartikler.
      </>
    ),
    aboutMe: <>Om meg</>,
    email: <>E-post</>,
  },
};
