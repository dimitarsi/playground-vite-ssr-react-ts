New-SelfSignedCertificate -CertStoreLocation Cert:\LocalMachine\My -DnsName "localhost" -FriendlyName "LocalDevEnv" -NotAfter (Get-Date).AddYears(10)
# Manually export the pfx certificate from Personal - Certificates
certlm