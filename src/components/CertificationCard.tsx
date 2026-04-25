import type { Certification } from "../data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-4 hover:shadow transition",
        isExpired && "opacity-80",
      )}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          className="w-24 h-24 object-contain rounded mb-3"
        />
      )}

      <h3 className="font-semibold">{c.title}</h3>

      <p className="text-sm text-gray-500">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex gap-3 text-sm">
        {c.credentialUrl && (
          <a
            className="underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Voir le certificat
          </a>
        )}

        {isExpired && <span className="text-red-500">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-500">Révoquée</span>
        )}
      </div>
    </article>
  );
}