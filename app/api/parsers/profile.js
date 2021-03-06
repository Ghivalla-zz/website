import parseImage from "./image";
import parseLink from "./link";
import parseIcon from "./icon";

export default function(entry) {
  const profilePicture = parseImage(entry.fields.profilePicture);
  const cta = parseLink(entry.fields.cta);
  const socialMedia = entry.fields.socialMedia.map(media => parseIcon(media));
  const localisation = parseImage(entry.fields.localisation);
  const mail = parseImage(entry.fields.mail);
  const { name, surename, jobPosition, status } = entry.fields;
  return {
    name,
    surename,
    jobPosition,
    profilePicture,
    cta,
    socialMedia,
    status,
    mail,
    localisation
  };
}
