import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingState from "../components/ui/LoadingState";
import { getPublicBranchBySlug } from "../services/publicBranchService";
import { IconChevronLeft } from '@tabler/icons-react';

function getReadableTokenLabel(token) {
  if (token.usage) return token.usage;

  return token.name
    .replace(/^adech-/, "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getTextColor(hex) {
  const value = hex?.replace("#", "");

  if (!value || ![3, 6].includes(value.length)) {
    return "#0b1020";
  }

  const fullHex =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;

  const red = parseInt(fullHex.slice(0, 2), 16);
  const green = parseInt(fullHex.slice(2, 4), 16);
  const blue = parseInt(fullHex.slice(4, 6), 16);

  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness > 150 ? "#10172a" : "#f8fafc";
}

function PublicColorTokenBar({ colorTokens }) {
  if (!colorTokens || colorTokens.length === 0) {
    return (
      <div className="rounded-xl border border-adech-border bg-adech-bg-deep/60 p-4">
        <p className="text-sm text-adech-text-muted">
          This Subbranch has no Color Tokens yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-adech-border">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${colorTokens.length}, minmax(11rem, 1fr))`,
        }}
      >
        {colorTokens.map((token) => {
          const textColor = getTextColor(token.value);

          return (
            <article
              key={token.id}
              className="min-h-32 border-r border-black/10 p-3 last:border-r-0"
              style={{
                backgroundColor: token.value,
                color: textColor,
              }}
            >
              <div className="flex h-full min-h-28 flex-col justify-between">
                <p className="line-clamp-1 text-xs opacity-70">
                  {token.name}
                </p>

                <div className="flex items-end justify-between gap-3">
                  <p className="text-xs font-medium opacity-80">
                    {token.value}
                  </p>

                  <p className="line-clamp-1 text-right text-sm font-medium">
                    {getReadableTokenLabel(token)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function PublicBranchDetail() {
  const { slug } = useParams();
  const [branch, setBranch] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadBranch() {
      try {
        setStatus("loading");
        setError("");

        const data = await getPublicBranchBySlug(slug);

        if (!ignore) {
          setBranch(data.branch);
          setStatus("success");
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    loadBranch();

    return () => {
      ignore = true;
    };
  }, [slug]);

  if (status === "loading") {
    return <LoadingState message="Loading Branch detail..." />;
  }

  if (status === "error") {
    return <ErrorMessage message={error} />;
  }

  if (!branch) {
    return null;
  }

  const subbranches = branch.subbranches || [];
  const tokenCount = subbranches.reduce(
    (total, subbranch) => total + (subbranch.colorTokens?.length || 0),
    0
  );

  return (
    <div className="grid gap-8">
      <Link to="/branches" className="flex gap-2 items-center text-sm text-adech-text-soft hover:text-adech-accent">
        <IconChevronLeft stroke={2} />
        Back to public Branches
      </Link>

      <section className="grid gap-2">
          <p className="text-sm text-adech-text-soft">Public Branch</p>

          <h1 className="text-4xl font-semibold text-adech-text">
            {branch.name}
          </h1>

          {branch.description && (
            <p className="max-w-3xl text-base leading-7 text-adech-text-muted">
              {branch.description}
            </p>
          )}

          {branch.mood && (
            <p className="text-sm text-adech-text-soft">{branch.mood}</p>
          )}
        <div className="flex gap-2">
          <p className="text-sm text-adech-text-muted">Created by</p>
          <p className="text-sm font-semibold text-adech-text">
            {branch.owner?.name || "Unknown"}
          </p>
        </div>
      </section>

      <section className="grid gap-7">
        {subbranches.map((subbranch) => (
          <section key={subbranch.id} className="grid gap-3">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-adech-text">
                  {subbranch.name}
                </h2>

                {subbranch.description && (
                  <p className="max-w-3xl text-sm leading-6 text-adech-text-muted">
                    {subbranch.description}
                  </p>
                )}
            </div>

            <PublicColorTokenBar colorTokens={subbranch.colorTokens || []} />
          </section>
        ))}
      </section>
    </div>
  );
}
