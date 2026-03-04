import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundBeams } from "./components/ui/background-beams";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { Spotlight } from "./components/ui/spotlight";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 8v6"></path>
      <circle cx="12" cy="17" r="1"></circle>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12"></path>
      <path d="m7 10 5 5 5-5"></path>
      <path d="M5 21h14"></path>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4.5 1.3-4.5-2.1-6.2-2.7"></path>
      <path d="M15 21v-3.5a3.1 3.1 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.5 13.5 0 0 0-7.1 0C5 1.5 3.8 1.9 3.8 1.9a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.1 6.5 6.1 6.8a3.1 3.1 0 0 0-.9 2.4V21"></path>
    </svg>
  );
}

export default function App() {
  const [modalType, setModalType] = useState(null);
  const isModalOpen = modalType !== null;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setModalType(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const modalConfig = useMemo(() => {
    if (modalType === "ios") {
      return {
        title: "iOS Beta Access",
        copy: [
          <>
            Ghost Wallet iOS is currently in early beta and operating on{" "}
            <span className="cyan">Solana Devnet</span>.
          </>,
          <>
            This build is an <strong>IPA</strong> file that can be installed via sideloading (AltStore).
          </>,
          <>TestFlight support is launching soon.</>,
        ],
        actions: [
          {
            variant: "primary",
            href: "https://github.com/YEET-ORG/privacy-wallet/releases/download/milestone-2/GhostWallet.ipa",
            label: "Download IPA (iOS)",
            icon: <DownloadIcon />,
            external: true,
          },
          {
            variant: "secondary",
            href: "https://github.com/YEET-ORG/privacy-wallet/releases/",
            label: "View iOS Release Notes",
            icon: <GithubIcon />,
            external: true,
          },
        ],
        risk: "Sideload required for now - TestFlight coming soon",
      };
    }

    return {
      title: "Android Closed Beta Access",
      copy: [
        <>
          Ghost Wallet Android is currently in <strong>Closed Beta</strong> and operating exclusively on{" "}
          <span className="cyan">Solana Devnet</span>.
        </>,
        <>As an early tester, your feedback is invaluable. Please report any bugs or issues you encounter to help us refine the privacy engine.</>,
      ],
      actions: [
        {
          variant: "primary",
          href: "https://github.com/YEET-ORG/privacy-wallet/releases/download/milestone-2/app-release.apk",
          label: "Accept & Download APK",
          icon: <DownloadIcon />,
          external: false,
        },
        {
          variant: "secondary",
          href: "https://github.com/YEET-ORG/privacy-wallet/releases/",
          label: "View Android Releases",
          icon: <GithubIcon />,
          external: true,
        },
      ],
      risk: "Use at your own risk - Devnet tokens only",
    };
  }, [modalType]);

  const closeModal = () => setModalType(null);

  return (
    <>
      <div className="app">
        <div className="background" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <BackgroundBeams />
        <Spotlight className="spotlight-left" delay={0.2} />
        <Spotlight className="spotlight-right" delay={0.45} />

        <main>
          <motion.section
            className="hero"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="badge"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="badge-dot"></span>
              <span className="badge-text">
                Agentic Privacy Engine <strong>v1.0.4-beta</strong>
              </span>
            </motion.div>

            <TextGenerateEffect
              className="hero-heading"
              words="The World's First Local AI Agentic Privacy Wallet"
            />

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
            >
              Ghost Wallet combines high-performance Solana privacy protocols with local-first AI agents. Execute
              complex strategies privately, without ever leaking your intent to the mempool.
            </motion.p>

            <motion.div
              className="actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <HoverBorderGradient
                as="button"
                type="button"
                className="cta cta-shell"
                innerClassName="cta-inner cta-inner-light"
                onClick={() => setModalType("android")}
              >
                Download Beta (Android)
              </HoverBorderGradient>

              <HoverBorderGradient
                as="button"
                type="button"
                className="cta ios-shell"
                innerClassName="cta-inner cta-inner-dark"
                onClick={() => setModalType("ios")}
              >
                Download iOS Beta (IPA)
              </HoverBorderGradient>
            </motion.div>

            <motion.div
              className="problem"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.85 }}
            >
              <p className="problem-label">The Problem</p>
              <p className="problem-text">
                Cloud AI agents leak your financial intent before the trade even happens.{" "}
                <strong>Ghost Wallet keeps the intelligence on-device.</strong>
              </p>
            </motion.div>
          </motion.section>
        </main>

        <div className="mobile-bottom-glow" aria-hidden="true"></div>
      </div>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            id="modal"
            className="modal open"
            aria-hidden={!isModalOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="modal-backdrop"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <button className="modal-close" type="button" aria-label="Close" onClick={closeModal}>
                <CloseIcon />
              </button>

              <div className="modal-content">
                <motion.div
                  className="modal-icon-wrap"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 }}
                >
                  <WarningIcon />
                </motion.div>

                <h2 id="modal-title" className="modal-title">
                  {modalConfig.title}
                </h2>

                <div className="modal-copy">
                  {modalConfig.copy.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <div className="modal-actions">
                  {modalConfig.actions.map((action) => (
                    <motion.a
                      key={action.label}
                      className={`modal-btn ${action.variant}`}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </motion.a>
                  ))}
                </div>

                <p className="modal-risk">{modalConfig.risk}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
